import { SubstructureCostProfile } from "./SubstructureCostProfile"
import { SubstructureCessationCostProfile } from "./SubstructureCessationCostProfile"
import { IAsset } from "../IAsset"
import { EMPTY_GUID } from "../../../Utils/constants"

export class Substructure implements Components.Schemas.SubstructureDto, IAsset {
    id?: string | undefined
    name?: string | undefined
    projectId?: string | undefined
    costProfile?: SubstructureCostProfile | undefined
    cessationCostProfile?: SubstructureCessationCostProfile | undefined
    dryweight?: number | undefined
    maturity?: Components.Schemas.Maturity | undefined
    currency?: Components.Schemas.Currency
    approvedBy?: string | null | undefined

    constructor(data?: Components.Schemas.SubstructureDto) {
        if (data !== undefined) {
            this.id = data.id
            this.name = data.name ?? ""
            this.projectId = data.projectId
            this.costProfile = SubstructureCostProfile.fromJSON(data.costProfile)
            this.cessationCostProfile = SubstructureCessationCostProfile
                .fromJSON(data.cessationCostProfile)
            this.dryweight = data.dryWeight
            this.maturity = data.maturity
            this.currency = data.currency ?? 0
            this.approvedBy = data.approvedBy ?? ""
        } else {
            this.id = EMPTY_GUID
            this.name = ""
            this.approvedBy = ""
        }
    }

    static fromJSON(data: Components.Schemas.SubstructureDto): Substructure {
        return new Substructure(data)
    }
}
