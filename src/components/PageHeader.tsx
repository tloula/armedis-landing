import PageBackdrop from "./PageBackdrop";

interface Props {
    title: string;
    description?: string;
}

// Title block for inner pages; sits under the fixed header
const PageHeader: React.FC<React.PropsWithChildren<Props>> = ({ title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <section className="relative px-5 pt-36 pb-12 md:pt-44 md:pb-16 text-center">
            <PageBackdrop />
            <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl md:leading-[1.05] font-extrabold text-foreground text-balance">
                {title}
            </h1>
            {description && (
                <p className="mx-auto mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/75 text-balance">
                    {description}
                </p>
            )}
            {children}
        </section>
    );
};

export default PageHeader;
