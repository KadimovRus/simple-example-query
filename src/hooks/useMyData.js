import {useQuery} from "@tanstack/react-query";
import DataService from "../services/data.service";

export const useMyData = (id, fetch) => {
    return useQuery({
            queryKey: ['todos', id],
            queryFn: () => DataService.getById(id),
            gcTime: 0,   // здесь можно указать какое время данные будут кешироваться
            enabled: fetch,
            select: ({data}) => data
        },
    );
}