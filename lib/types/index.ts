export type Record = {
    key: string
    image: string
    name: string
}

export type FracturedImages = {
    allGroups: Record[]
    test: Record[]
    train: Record[]
    valid: Record[]
}