import React from 'react';
import { useAppContext } from './Context';

const CategoriesManage = () => {
    const { category } = useAppContext();

    const renderSubcategories = (subcategories) => {
        // for(let i=0; i<=subcategories.length-1;i++){
        //     console.log(subcategories[i])
        //     if(Array.isArray(subcategories[1])){
        //         console.log('array')
        //     }
        //     else if(typeof(subcategories[1])==='string'){
        //         console.log('string')
        //     }
        //     else if(typeof(subcategories[1])==='object'){
        //         console.log('object')
        //     }
        // }
        return (
            <div className='text-yellow-300 flex gap-10'>
                <ul className='flex gap-5'>
                    {subcategories.map(subcategory => (
                        <li className='text-green-600 flex gap-5' key={Object.keys(subcategory)[0]}>
                            {Array.isArray(subcategory[Object.keys(subcategory)])
                                ? <span className='text-red-500 flex gap-10'>{Object.keys(subcategory) + "==>"}</span>
                                : subcategory }
                            {Array.isArray(subcategory[Object.keys(subcategory)]) &&
                                <span className='flex'>==
                                    <span className='text-blue-600 flex flex-col gap-10'>{renderSubcategories(subcategory[Object.keys(subcategory)])}</span>
                                </span>}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div>
            <div>
                <div>
                    <h1 className='h3 text-center'>Category Management(Add, remove or manage)</h1>
                    <hr className='my-5' />
                </div>
                <div className='border'>
                    <div className='tables'>
                        <div className='tables-row'>
                            <div>
                                <div>
                                    <input type="search" name="search" id="serachCategories" className='outline-pink-400 w-full h-[50px] p-5 rounded-xl border-b-2 mb-3' placeholder='Serch for category' />
                                </div>
                                {category.map(every => (
                                    <div key={every.id} className='bg-[rgb(241,241,241)] hover:bg-[rgb(249,248,248)] h-[550px] flex justify-start items-center p-5'>
                                        <div className='flex gap-5'>
                                            <span>{every.id}</span>
                                            <div className='flex gap-10'>
                                                <span className='flex'>{every.category}</span>
                                                {Array.isArray(every.subcategory) && renderSubcategories(every.subcategory)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <TreeView
  aria-label="file system navigator"
  defaultCollapseIcon={<ExpandMoreIcon />}
  defaultExpandIcon={<ChevronRightIcon />}
  sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
>
  <TreeItem nodeId="1" label="Applications">
    <TreeItem nodeId="2" label="Calendar" />
  </TreeItem>
  <TreeItem nodeId="5" label="Documents">
    <TreeItem nodeId="10" label="OSS" />
    <TreeItem nodeId="6" label="MUI">
      <TreeItem nodeId="8" label="index.js" />
    </TreeItem>
  </TreeItem>
</TreeView>
                </div>
            </div>
        </div>
    );
};

export default CategoriesManage;
