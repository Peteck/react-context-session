import { Dispatcher } from "./dispatcher";
export declare type SessionValueType = {} | null | undefined;
export declare type SessionGenericData = {
    [key: string]: SessionValueType;
};
export declare type SessionDispatchFunc = (value: any) => void;
export declare type SessionContextKey = string;
export declare type SessionOnChange<DataType extends SessionGenericData> = (data: DataType) => void;
export declare type SessionGenericContext<DataType extends SessionGenericData = SessionGenericData> = {
    data: DataType;
    dispatcher: Dispatcher<DataType>;
    onChange?: SessionOnChange<DataType>;
};
