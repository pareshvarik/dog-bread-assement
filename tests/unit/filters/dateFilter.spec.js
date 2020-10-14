import dateFilter from '@/filters/dateFilter.js'

describe('In Date filter',()=>{
    it("returns the date in full year format 'yyyy'",()=>{
        const year=new Date().getFullYear();
        expect(dateFilter()).toBe(year);
    });
});