declare namespace API {
    interface PageRequest {
        keyWord?: string;
        page: number;
        size: number;
        [key: string]: any;
    }

    interface PageResponse<T> {
        total: number;
        data: T[];
    }

}
