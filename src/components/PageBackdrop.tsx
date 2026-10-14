// Soft colour washes behind the top of a page, fading into the base background
const PageBackdrop: React.FC = () => {
    return (
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -bottom-px -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#f3f1ea_0%,var(--background)_100%)]" />
            <div className="glow -top-32 right-[-10%] h-[520px] w-[520px] bg-primary/25" />
            <div className="glow top-1/3 -left-40 h-[420px] w-[420px] bg-[#c9a98f]/30" />
            <div className="glow bottom-0 right-1/4 h-[300px] w-[300px] bg-primary-accent/20" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/80 to-background" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-background" />
        </div>
    );
};

export default PageBackdrop;
