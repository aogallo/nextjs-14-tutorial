export type AccountStateForm = {
  errors?: {
    date?: string[]
    authorizationNumber?: string[]
    type?: string[]
    serie?: string[]
    dteNumber?: string[]
    issuerId?: string[] //nit del emisor
    issuerName?: string[] //nombre del emisor
    receiverId?: string[] //nit del receptor
    receiverName?: string[] //nombre del receptor
    currency?: string[]
    amount?: string[]
    state?: string[]
    iva?: string[]
    accountType?: string[]
    cancellationDate?: string[]
    //metadata
    petroleum?: string[]
    accommodation?: string[]
    tickets?: string[]
    pressStamp?: string[]
    firefighters?: string[]
    municipalTax?: string[]
    alcoholicBeverages?: string[]
    tobacco?: string[]
    cement?: string[]
    nonAlcoholicBeverages?: string[]
    portFee?: string[]
  }
  message: string | null
}
