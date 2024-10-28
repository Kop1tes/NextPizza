import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList title="Пиццы" items={[
                                {
                                id: 1,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 2,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 3,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 4,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 5,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 6,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                            ]} categoryId={1} />  
                            <ProductsGroupList title="Комбо" items={[
                                {
                                id: 7,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 8,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 9,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 10,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 11,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                                {
                                id: 12,
                                name: 'Сырная пицца',
                                imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EEA00D8787476E8D41C6EB1E3EA97D.avif',
                                price: 550,
                                items:[{price: 550}],
                                },
                            ]} categoryId={2} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}