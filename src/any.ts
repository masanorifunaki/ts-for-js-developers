import axios from 'axios';

export {};

const url: string =
  'https://udemy-utils.herokuapp.com/api/v1/events?token=token123';

axios.get(url).then((res) => {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  const data: Article[] = res.data;
  console.log(data);
});
