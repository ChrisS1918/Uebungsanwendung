import { HttpClient } from '@angular/common/http';

export class BaseService<TEntity, TCreate, TUpdate> {
    constructor(
        public readonly baseUrl: string,
        protected readonly http: HttpClient
    ) { }

    create(dto: TCreate) {
        return this.http.post<TEntity>(this.baseUrl, dto);
    }

    delete(id: string) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    read(id: string) {
        return this.http.get<TEntity>(`${this.baseUrl}/${id}`);
    }

    readAll() {
        return this.http.get<Array<TEntity>>(this.baseUrl);
    }

    update(id: string, dto: TUpdate) {
        return this.http.put<TEntity>(`${this.baseUrl}/${id}`, dto);
    }
}