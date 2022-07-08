type ProductDialogProps = Omit<Product, 'category' | 'specs'> & {
    open: boolean
    onClose: () => void
}
