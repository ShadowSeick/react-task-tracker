export const TaskCalendarHeader = () => {
    const date = new Date();
    const today = date.getDate();
    const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const thisMonth = month[date.getMonth()];
    
    return (
        <div>
            <h1 className='text-uppercase text-center'>{`${today} ${thisMonth}`}</h1>
        </div>
    )
}

