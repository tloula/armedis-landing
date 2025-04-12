function Ensure-WebpFolder {
    if (-not (Test-Path "WEBP")) {
        New-Item -ItemType Directory -Path "WEBP"
    }
}

function Convert-ToWebp {
    param (
        [string]$imagePath
    )
    
    try {
        $fileName = [System.IO.Path]::GetFileNameWithoutExtension($imagePath)
        $outputPath = Join-Path "WEBP" "$fileName.webp"
        
        # Using cwebp for conversion (requires Google's WebP utilities to be installed)
        # You can download it from: https://developers.google.com/speed/webp/download
        cwebp $imagePath -o $outputPath
    }
    catch {
        Write-Error "Failed to convert image $imagePath : $_"
    }
}

# Main execution
try {
    # Create WEBP folder
    Ensure-WebpFolder
    
    # Convert all PNGs to WEBP
    Get-ChildItem -Filter "*.png" | ForEach-Object {
        Convert-ToWebp -imagePath $_.FullName
    }
}
catch {
    Write-Error "An error occurred: $_"
}