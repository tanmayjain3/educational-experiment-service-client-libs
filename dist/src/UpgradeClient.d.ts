import { Interfaces } from './identifiers';
import { IExperimentAssignment, IMetricUnit, IFeatureFlag } from 'upgrade_types';
export default class UpgradeClient {
    private static hostUrl;
    private static api;
    private userId;
    private token;
    private group;
    private workingGroup;
    private experimentConditionData;
    private featureFlags;
    constructor(userId: string, token: string);
    static setHostUrl(url: string): void;
    private validateClient;
    setGroupMembership(group: Map<string, Array<string>>): Promise<Interfaces.IUser>;
    setWorkingGroup(workingGroup: Map<string, string>): Promise<Interfaces.IUser>;
    getAllExperimentConditions(context: string): Promise<IExperimentAssignment[]>;
    getExperimentCondition(experimentPoint: string, partitionId?: string): IExperimentAssignment;
    markExperimentPoint(experimentPoint: string, partitionId?: string): Promise<Interfaces.IMarkExperimentPoint>;
    failedExperimentPoint(experimentPoint: string, reason: string, experimentId?: string): Promise<Interfaces.IFailedExperimentPoint>;
    getAllFeatureFlags(): Promise<IFeatureFlag[]>;
    getFeatureFlag(key: string): IFeatureFlag;
    log(key: string, value: any): Promise<Interfaces.ILog>;
    setAltUserIds(altUserIds: string[]): Promise<Interfaces.IExperimentUser[]>;
    addMetrics(metrics: IMetricUnit[]): Promise<Interfaces.IMetric[]>;
}
