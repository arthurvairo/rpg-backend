type TBaseSharedObject = {
  Model: any
}

export type TSharedListObject = TBaseSharedObject & {
  filterBy?: string
  search?: string
  relationshipField?: string
}
