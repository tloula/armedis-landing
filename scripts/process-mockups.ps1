# Import required assemblies for image manipulation
Add-Type -AssemblyName System.Drawing

function Extract-ZipFiles {
    $extractedFiles = @()
    $zipFiles = Get-ChildItem -Filter "*.zip" -File

    if ($zipFiles.Count -eq 0) {
        Write-Warning "No zip files found in the current directory."
        return $extractedFiles
    }

    $zipFiles | ForEach-Object {
        # Store the list of files before extraction
        $beforeFiles = Get-ChildItem -File | Select-Object -ExpandProperty FullName

        # Extract the zip
        if ($_.FullName) {
            Expand-Archive -Path $_.FullName -DestinationPath $_.DirectoryName -Force
        } else {
            Write-Error "Zip file path is null. Skipping."
            return
        }

        # Find new files by comparing with previous list
        $afterFiles = Get-ChildItem -File | Select-Object -ExpandProperty FullName
        $newFiles = Compare-Object -ReferenceObject $beforeFiles -DifferenceObject $afterFiles |
                    Where-Object { $_.SideIndicator -eq '=>' } |
                    Select-Object -ExpandProperty InputObject

        # Add new files to our tracking array
        $extractedFiles += $newFiles

        # Delete the zip file after extraction
        Remove-Item -Path $_.FullName -Force
        Write-Host "Deleted zip file: $($_.FullName)"
    }
    return $extractedFiles
}

function Remove-NonPortraitFiles {
    param (
        [string[]]$extractedFiles
    )

    if ($extractedFiles.Count -eq 0) {
        return
    }
    
    # Only process files that were extracted from zips
    $extractedFiles | ForEach-Object {
        if ((Split-Path $_ -Leaf) -notmatch "portrait") {
            Remove-Item $_ -Force
            Write-Host "Removed non-portrait file: $_"
        }
    }
}

function Remove-PortraitFromNames {
    Get-ChildItem -Filter "*portrait*" | ForEach-Object {
        $newName = $_.Name -replace "-portrait", ""
        Rename-Item -Path $_.FullName -NewName $newName
    }
}

function Ensure-CroppedFolder {
    if (-not (Test-Path "Cropped")) {
        New-Item -ItemType Directory -Path "Cropped"
    }
}

function Crop-ImageTopHalf {
    param (
        [string]$imagePath
    )
    
    try {
        $image = [System.Drawing.Image]::FromFile($imagePath)
        $newHeight = [int]($image.Height / 2)
        $newBitmap = New-Object System.Drawing.Bitmap($image.Width, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($newBitmap)
        
        # Copy the top half of the image
        $sourceRect = New-Object System.Drawing.Rectangle(0, 0, $image.Width, $newHeight)
        $destRect = New-Object System.Drawing.Rectangle(0, 0, $image.Width, $newHeight)
        $graphics.DrawImage($image, $destRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
        
        # Save to Cropped folder with same filename
        $newPath = Join-Path "Cropped" (Split-Path $imagePath -Leaf)
        $newBitmap.Save($newPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Cleanup
        $graphics.Dispose()
        $newBitmap.Dispose()
        $image.Dispose()
    }
    catch {
        Write-Error "Failed to process image $imagePath : $_"
    }
}

# Main execution
try {
    # 1. Extract all zip files and track new files
    $newlyExtractedFiles = Extract-ZipFiles
    
    # 2. Remove non-portrait files from extracted content only
    Remove-NonPortraitFiles -extractedFiles $newlyExtractedFiles
    
    # 3. Remove "portrait" from filenames
    Remove-PortraitFromNames

    # 4. Create Cropped folder
    Ensure-CroppedFolder
    
    # 5. Crop all PNGs in root folder
    Get-ChildItem -Filter "*.png" | ForEach-Object {
        Crop-ImageTopHalf -imagePath $_.FullName
    }
}
catch {
    Write-Error "An error occurred: $_"
}
