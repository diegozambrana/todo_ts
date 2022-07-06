export const Card = ({children, color="blue"}: any) => {
    return (
    <div style={{padding: '1rem', backgroundColor: color}}>
        {children}
    </div>
    )
}