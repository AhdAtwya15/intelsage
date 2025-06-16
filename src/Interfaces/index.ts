export interface IColorShades {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

export interface IThemeTokens {
    grey: IColorShades;
    primary: IColorShades;
    greenAccent: IColorShades;
    redAccent: IColorShades;
    blueAccent: IColorShades;
}

export interface IExtendedPalette {
    neutral: {
        dark: string;
        main: string;
        light: string;
    };
    primary: {
        main: string;
    };
    secondary: {
        main: string;
    };
    background: {
        default: string;
    };
    mode: "dark" | "light";
}

export interface IThemeSetting {
    palette: IExtendedPalette;
    typography: {
        fontFamily: string;
        fontSize: number;
        h1: { fontFamily: string; fontSize: number };
        h2: { fontFamily: string; fontSize: number };
        h3: { fontFamily: string; fontSize: number };
        h4: { fontFamily: string; fontSize: number };
        h5: { fontFamily: string; fontSize: number };
        h6: { fontFamily: string; fontSize: number };
    };
}


export interface IColorModeContext{
    toggleColorMode: () => void;
}

export interface IFormInputs{
    firstName: string,
    lastName: string,
    email: string,
    contact: string,
    address1: string,
    address2: string,
}

export interface ICorrelations{
    HIGH:number,
    MEDIUM:number,
    LOW:number,
    INFO:number,
}

export interface IUSerRes{
    id: string,
    email: string,
    role: string

}
export interface ITokenRes{
    user: IUSerRes
    token:string;
}

export interface ILoginRes{
    data:ITokenRes;
    
}

export interface IAssetsList{
    id:string,
    target:string,
    startDate:string,
    status:"RUNNING"|"FINISHED"|"STARTING",
}
export interface IPagination{
    currentPage:number;
    pageSize:number;
    totalCount:string;
    totalPages:number;
}

export interface IScanList{
    id:string,
    name:string,
    target:string,
    startDate:string,
    endDate:string,
    status:"RUNNING"|"FINISHED"|"STARTING",
    elementsFound:number
}

export interface ISummary{
    type:string,
    typeName: string,
    uniqueDataElement: number,
    totalDataElement: number,
    lastDataElementIdentified: string
}

export interface ISummariesList{
    scanId: string;
    summaries: ISummary[];
}

export interface IEventResult{
    lastIdentified: string,
    dataElement: string,
    sourceDataElement: string,
    sourceModule: string
}

export interface User {
    id: string;
    email: string;
    role: string;
}

export interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

export interface IDashboardScan{
    id:string,
    name:string,
    startDate:string,
    endDate:string,
    status:"RUNNING"|"FINISHED"|"STARTING",
    elementsFound:number
}
export interface IScanByYear {
    year: number;
    count: string;
}
export interface IDashboardData{
    totalScans: string,
    totalAssets: string,
    ongoingScans: string,
    finishedScans: string,
    latestScans: IDashboardScan[];
    assetNames: string[];
    scansByYear: IScanByYear[];
}
