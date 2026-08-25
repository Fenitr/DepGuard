type Severity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

interface VulneraniltyReport {
    summary : {
  totalFileScanned: number;
  totalDependeciesScanned: number;
  vulnerabilitiesCount : Record<Severity, number>
    }
};

secret : Array<{
    filePath: string;
    line : number;
    type: string;
    snippet: string;
}>;

cves : Array<{
    packageName: string;
    installedVersion: string;
    cveId: string;
    severity : Severity;
    summary: string;
    fixedIn?: string;
}>;