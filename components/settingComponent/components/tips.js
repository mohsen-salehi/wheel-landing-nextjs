import React from 'react';

function Tips() {
    return (
        <div className=" p-2 my-2 rounded-xl border border-amber-300 bg-amber-100 text-gray-700 backdrop-blur-sm w-full flex flex-wrap">
            <h5 className="w-full flex mb-1">نکته : </h5>
            <h5 className="w-full flex mb-1">
                -تعداد دفعات استفاده بین 1 تا 3 می باشد.
            </h5>
            <h5 className="w-full flex mb-1">
                -جمع درصد های جوایز باید %100 باشد.
            </h5>
            <h5 className="w-full flex mb-1">
                -حداقل و حدااکثر تکه های گردونه به ترتیب بین 2 و 8 می باشد.
            </h5>
        </div>
    );
}

export default Tips;