import { Container, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />

                <Categories />
                <SortPopup />
            </Container>
        </>
    );
}