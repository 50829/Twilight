export interface DiaryMoment {
    id: number;
    content: string;
    date: string; // ISO string
    images?: string[];
}

// 示例即刻短文数据
export const moments = [
    {
        id: 1,
        content:
            "The Darkest Hour Is Just Before The Dawn",
        date: "2020-02-02T00:00:00Z",
        images: [],
    },
];