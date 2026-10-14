import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className="py-14 lg:py-24">
            <SectionTitle>
                <h2 className="text-center mb-4 text-balance">{title}</h2>
            </SectionTitle>
            <p className="mb-12 lg:mb-16 text-center text-foreground/75 max-w-2xl mx-auto text-balance">{description}</p>
            {children}
        </section>
    )
}

export default Section
