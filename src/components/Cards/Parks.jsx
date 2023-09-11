/* eslint-disable react/prop-types */

const Parks = ({name, images, description, latLong, url, activities }) => {
  return (
    <main className='container mx-auto py-20 px-8'>
      <div className='grid lg:grid-cols-3'>
          {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} width={400} alt={`Image ${index}`} />
            <h1>{name}</h1>
          </div>
          ))}
      </div>
    </main>
  );
};

export default Parks;
