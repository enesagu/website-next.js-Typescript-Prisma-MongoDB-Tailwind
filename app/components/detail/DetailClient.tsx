import PageContainer from "@/app/containers/PageContainer"


const DeatilClient = ({product}: {product:any}) =>{
    return(
        <div>
            <PageContainer>
                {product?.name}
            </PageContainer>
        </div>
    )
}

export default DeatilClient