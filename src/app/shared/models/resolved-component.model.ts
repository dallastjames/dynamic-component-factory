export interface ResolvedComponent {
    setData(): Promise<void>;
    destroy(): Promise<void>;
}
