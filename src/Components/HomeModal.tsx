import { Modal } from 'antd';
import { currentUrl } from '../Pages/SearchPage';
import SingleMarkerMap from './SingleMarkerMap';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { HeartTwoTone, HeartFilled } from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from "dayjs";
import TextArea from 'antd/es/input/TextArea';
import { CheckCircleFilled, CloseCircleFilled, EditFilled } from '@ant-design/icons';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'






function HomeModal({ show, setShow, home }: { show: boolean; setShow: () => void; home: { id: number, name: string, photo: string[] , price: string, type: string, coordinates: {lat: number, lng: number}, owner: string, description: string, keyFeatures: {fiberInternet: boolean , airConditioner: boolean, floorHeating: boolean, fireplace: boolean, terrace: boolean, satellite: boolean, parquet: boolean, steelDoor: boolean, furnished: boolean, insulation: boolean} }}) {
    const [value, setValue] = useState<Dayjs | null>(dayjs(null)); //eslint-disable-line
    
    return (
        <Modal
            open={show}
            onCancel={setShow}
            footer={null}
            width={window.innerWidth > 768 ? "75%" : "100%"}
            style={{ top: 0}}
            afterClose={() => {
                window.history.pushState({}, '', currentUrl);
            }}
            centered
        >
            <div className="mt-4 h-full">
                <div className="rounded-lg overflow-hidden">
                    <Images />
                </div>
                <div className="flex justify-between mt-3">
                    <h1 className="text-2xl font-bold">{home.name}</h1>
                    <h1 className="text-2xl font-bold">{home.price}₺</h1>
                </div>
                <div className="flex flex-col items-start mt-2">
                    <h1 className="text-xl font-bold">Description</h1>
                    <p className="text-l">{home.description}</p>
                </div>
                <div className="flex flex-col items-start mt-4">
                    <h1 className="text-xl font-bold">Key Features</h1>
                    <div className="flex flex-wrap w-full rounded-lg gap-2">
                        {home?.keyFeatures && Object.keys(home.keyFeatures).map((key, index)=> {
                            return (
                                <div key={index} className={`flex flex-row items-center p-2 gap-2 rounded-lg ${
                                    index === 0 ? home.keyFeatures.fiberInternet ? "bg-green-100" : "bg-red-100" :
                                    index === 1 ? home.keyFeatures.airConditioner ? "bg-green-100" : "bg-red-100" :
                                    index === 2 ? home.keyFeatures.floorHeating ? "bg-green-100" : "bg-red-100" :
                                    index === 3 ? home.keyFeatures.fireplace ? "bg-green-100" : "bg-red-100" :
                                    index === 4 ? home.keyFeatures.terrace ? "bg-green-100" : "bg-red-100" :
                                    index === 5 ? home.keyFeatures.satellite ? "bg-green-100" : "bg-red-100" :
                                    index === 6 ? home.keyFeatures.parquet ? "bg-green-100" : "bg-red-100" :
                                    index === 7 ? home.keyFeatures.steelDoor ? "bg-green-100" : "bg-red-100" :
                                    index === 8 ? home.keyFeatures.furnished ? "bg-green-100" : "bg-red-100" :
                                    index === 9 ? home.keyFeatures.insulation ? "bg-green-100" : "bg-red-100" : "bg-red-100"
                                }`}>
                                    { index === 0 ? home.keyFeatures.fiberInternet ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 1 ? home.keyFeatures.airConditioner ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 2 ? home.keyFeatures.floorHeating ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 3 ? home.keyFeatures.fireplace ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 4 ? home.keyFeatures.terrace ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 5 ? home.keyFeatures.satellite ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 6 ? home.keyFeatures.parquet ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 7 ? home.keyFeatures.steelDoor ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 8 ? home.keyFeatures.furnished ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> :
                                    index === 9 ? home.keyFeatures.insulation ? <CheckCircleFilled className="text-green-500"/> : <CloseCircleFilled className="text-red-500"/> : null

                                    }
                                    <label className="text-gray-700">
                                        {index === 0 ? "Fiber Internet" :
                                        index === 1 ? "Air Conditioner" :
                                        index === 2 ? "Floor Heating" :
                                        index === 3 ? "Fireplace" :
                                        index === 4 ? "Terrace" :
                                        index === 5 ? "Satellite" :
                                        index === 6 ? "Parquet" :
                                        index === 7 ? "Steel Door" :
                                        index === 8 ? "Furnished" :
                                        index === 9 ? "Insulation" : null}
                                    </label>
                                </div>
                                );
                            }
                        )}
                    </div> 
                </div>
                <h1 className="text-xl font-bold my-4">Location</h1>
                <SingleMarkerMap marker={home} />
                <h1 className="text-xl font-bold mt-4">Contact</h1>
                <div className='flex flex-wrap items-center justify-start gap-4'> 
                    <div className="flex flex-col items-start">
                        <div className="flex flex-wrap items-center gap-4">
                            <Avatar size={85} src="https://media.licdn.com/dms/image/D4D03AQEaefuMTTa7Bw/profile-displayphoto-shrink_400_400/0/1676402963098?e=1719446400&v=beta&t=nXuuk9YFnu4GRiWSU7U81NWJyIilQ2-sD1FnsGqwgmw" />
                            <div className="flex flex-col text-left gap-1 text-gray-900">
                                <label className="text-[25px]">Ali Taş</label>
                                <a href='tel:+905300493683' className="text-button-primary hover:text-button-primaryHover text-[12px]">+90 530 049 36 83</a>
                                <a href='mailto:aliyigittas@ali.com' className="text-button-primary hover:text-button-primaryHover">aliyigittas@ali.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <DateTimePicker 
                            //mobiletoolbar hidden
                            
                            label="Select Date and Time"
                            disablePast
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                            minutesStep={15}
                            orientation='landscape'
                            ampm={false}
                            onChange={setValue}
                            closeOnSelect={false}
                            slotProps={{ textField: { size: 'small', color:'success' }}}
                        />
                        <TextArea className='p-2 border-1 border-[#c4c4c4] focus:border-button-primary hover:border-button-primary focus:ring-0' placeholder="Type your message here" autoSize={{ minRows: 1, maxRows: 3 }} variant="outlined" />
                    </div>
                    <button className="bg-button-primary text-white rounded-lg p-2">Schedule a Meeting</button>
                </div>
                
            </div>
        </Modal>
    );

    function Images()
    {
        const [isLiked, setIsLiked] = useState(false);
        const [isLikeHovered, setIsLikeHovered] = useState(false);
        const [images, setImages] = useState<HTMLImageElement[]>([]);

        for (let i = 0; i < home.photo.length; i++) {
            const image = new Image();
            image.src = home.photo[i];
            images.push(image);
        }

        useEffect(() => {
            const loadedImages: HTMLImageElement[] = [];
            for (let i = 0; i < home.photo.length; i++) {
              const image = new Image();
              image.onload = () => {
                loadedImages.push(image);
                setImages(loadedImages);
              };
              image.src = home.photo[i];
            }
          }, []);

        return (
            <div className="relative">
                <div className={`absolute m-1 z-10 top-1 left-1 p-1 px-2 ${home.type=="Sale" ? "bg-green-500": "bg-button-secondary"} rounded-lg shadow-md flex items-center justify-center`}> {/*eslint-disable-line eqeqeq*/}
                    <span className="text-white font-bold text-[15px]">{home.type}</span>
                </div>
                <div className="absolute z-10 bottom-0 right-0 mb-2 mr-2 text-white text-[30px] cursor-pointer" onClick={() => {}}> 
                    <div className="rounded-full bg-white w-11 h-11 flex items-center justify-center bg-transparent shadow-md"
                    onClick={
                        (e) => {

                        if (Cookies.get('loggedIn') === 'true') {
                            if (home.owner === Cookies.get("Name")) {
                                window.location.href = '/editListing/' + home.id;
                              } else {
                                setIsLiked(!isLiked);
                              }
                        } else {
                            window.location.href = '/login';
                        }
                        e.stopPropagation();
                        }
                    }
                    onMouseEnter={() => setIsLikeHovered(true)}
                    onMouseLeave={() => setIsLikeHovered(false)}
                    >
                        {home.owner === Cookies.get("Name") ? ( // Check if the owner is 'Baran'
                            isLiked ? <EditFilled className='text-[#6fa3f7]' /> : isLikeHovered ? <EditFilled className='text-[#6fa3f7]' /> : <EditFilled className='text-[#e2e9ef]' />
                            ) : ( //if the owner is not matching, use default heart icons
                            isLiked ? <HeartFilled className='text-red-500'/> : isLikeHovered ? <HeartTwoTone twoToneColor={'#ef4444'}/> : <HeartTwoTone twoToneColor={'#9ca3af'}/>)
                        }
                    </div>
                </div>
                <Gallery>

                    <div className="grid grid-cols-5 grid-rows-6 gap-1 max-h-[512px]">
                        <div className="col-span-3 row-span-6 flex w-full">
                            <Item cropped
                                original={home.photo[0]}
                                thumbnail={home.photo[0]}
                                height={images[0].height}
                                width={images[0].width}
                                >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick = {open} src={home.photo[0]} alt="House" className="w-full h-full flex cursor-pointer"/>
                                )}
                            </Item>
                    </div>
                        <div className="col-span-2 row-span-3 col-start-4">
                            <Item 
                                original={home.photo[1]}
                                thumbnail={home.photo[1]}
                                height={images[1].height}
                                width={images[1].width}
                                >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick = {open} src={home.photo[1]} alt="House" className="flex w-full h-full cursor-pointer"/>
                                )}
                            </Item>
                        </div>
                        <div className="col-span-2 row-span-3 col-start-4 row-start-4">
                            <Item 
                                original={home.photo[2]}
                                thumbnail={home.photo[2]}
                                height={images[2].height}
                                width={images[2].width}
                                >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick = {open} src={home.photo[2]} alt="House" className="flex w-full h-full cursor-pointer"/>
                                )}
                            </Item>
                        </div>
                    </div>
                    
                    {/*
                    Burada gridde gösterilmeyen fotolar yer alacak, 
                    burdakiler sadece tam ekran olunca erişilebilir
                    */}
                    {
                        home.photo.slice(3).map((photo, index) => {
                            
                            return (
                                <Item 
                                    original={photo}
                                    thumbnail={photo}
                                    height={images[index+3].height}
                                    width={images[index+3].width}
                                    >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick = {open} src={photo} alt="House" className="w-0 h-0"/>
                                    )}
                                </Item>
                            );
                        })
                    }
                </Gallery> 
            </div>
        );
    }
}

export default HomeModal;