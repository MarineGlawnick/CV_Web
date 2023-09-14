export default function useAssets(path: string): string {
    const assets = import.meta.glob("~/assets/img/**/*", {
        eager: true,
        import: "default",
    })
    // @ts-expect-error: wrong type info
    return assets["/assets/img/" + path]
}
