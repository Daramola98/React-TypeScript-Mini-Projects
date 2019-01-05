import { ReactNode } from "react";

export interface ICommentDetailsProps {
    authorsName: string;
    date: number;
    content: string;
    avatar: string;
} 

export interface IApprovalCardProps {
    children: ReactNode
}