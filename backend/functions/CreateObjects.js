export default async function createMultipleObjects({objects, model}) {
  try {
    const savedObjects = await model.insertMany(objects);
    console.log('Objects successfully created:', savedObjects);
  } catch (error) {
    console.error('Error creating objects:', error);
  }
}