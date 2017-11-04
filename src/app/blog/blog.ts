export class Category {
    id: number;
    name: string;
    checked:boolean;
    subCategory: SubCategory[]; 
  }
  
  export class SubCategory {
    id: number;
    category_id: number;
    name: string;
  }
  
  export class Blog {
      category:Category[] = [];
      title:string = '';
      description:string = '';
      slug:string = '';
      status:boolean = false;
      likes:number;
      shared:number;
      total_visit:number;
      created_at:string;
      images:any;
  }
  
  export const category: Category[] = [
      { 
          id: 1, 
          name: '#Trending',
          checked:false,
          subCategory: [ 
              {
                  id: 1,
                  category_id: 1,
                  name:'Facebook',
              },
              {
                  id: 2,
                  category_id: 1,
                  name:'Twitter',
              }  
          ]      
      },
      { 
          id: 2, 
          name: 'Lifestyle',
          checked:false,
          subCategory:[] 
      },
      { 
          id: 3, 
          name: 'Technology',
          checked:false,
          subCategory:[] 
      },
      { 
          id: 4, 
          name: 'Education',
          checked:false,
          subCategory:[] 
      },
      { 
          id: 5, 
          name: 'Business',
          checked:false,
          subCategory:[] 
      },
      { 
          id: 6, 
          name: 'Mystry',
          checked:false,
          subCategory:[] 
      },
      { 
          id: 7, 
          name: 'Religion',
          checked:false,
          subCategory:[] 
      },
      { 
          id: 8, 
          name: 'Entertainment',
          checked:false,
          subCategory:[] 
      }
  ];