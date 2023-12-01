function cloneObject(obj) {
    return { ...obj };
  }
  const originalObject = { key1: 'abc', key2: 'def', key3: 'ghij' };
  const clonedObject = cloneObject(originalObject);
  console.log(clonedObject);
  