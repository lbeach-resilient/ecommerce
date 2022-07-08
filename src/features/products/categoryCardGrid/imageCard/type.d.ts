type ImageCardProps = { onClick: OnClickProductCard } & Pick<
    Product,
    'id' | 'title' | 'price' | 'stock' | 'image' | 'onClick'
>

type OnClickProductCard = (id: ProductId) => void
