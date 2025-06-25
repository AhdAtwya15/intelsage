import { IFinding, IFindingsSummary } from "../../Interfaces";

interface IProps {
  averageRiskScore: number;
  findings: IFinding[];
  findingsSummary: IFindingsSummary;
}

const SummaryCard = ({  findings }: IProps) => {
  return (
    <div className="flex flex-col gap-4 w-full bg-primary-400 rounded-xl p-6 border border-[#ececece1] dark:border-none">
      {findings.map((finding) => (
        <div
          key={finding.id}
          className="bg-primary-500 border border-[#E5E7EB] dark:border-transparent rounded-lg p-4 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-grey-100 mb-2">
            {finding.title}
          </h2>

          <div className="text-sm text-grey-100 mb-1">
            <strong className="text-grey-100">Category:</strong> {finding.category}
          </div>

          <div className="text-sm text-[#71717A] mb-2">
            <strong className="text-grey-100">Description:</strong> {finding.description}
          </div>

          <div className="text-sm text-[#71717A] mb-2">
            <strong className="text-grey-100">Mitigation:</strong> {finding.mitigation}
          </div>

          <div className="flex justify-between text-sm text-[#71717A]">
            <div>
              <strong className="text-grey-100">Risk Score:</strong> {finding.riskScore}
            </div>
            <div>
              <strong className="text-grey-100">Severity:</strong> {finding.severity}
            </div>
          </div>

          <div className="text-sm text-[#71717A] mt-2">
            <strong className="text-grey-100">Affected Assets:</strong> {finding.affectedAssets.join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;

