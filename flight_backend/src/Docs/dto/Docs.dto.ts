import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';

const keyify = (obj, prefix = '') =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res;
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix)];
    }
    return [...res, prefix + el];
  }, []);

const translate = (obj, item) => {
  const output = keyify(obj);
  if (Array.isArray(item)) {
    const returnedObj = { ...obj };
    for (let index = 0; index < item.length; index++) {
      const result = output.find(
        (itemInsideArr) =>
          itemInsideArr == `${item[index]}_ar` ||
          itemInsideArr == `${item[index]}_en`,
      );
      returnedObj[item[index]] = obj[`${result}`];
      console.log(result);
    }

    return returnedObj;
  } else {
    const varToString = (varObj) => Object.keys(varObj);
    const arr = varToString(obj);
    arr.includes(item);
    const result = arr.find(
      (itemInsideArr) =>
        itemInsideArr == `${item}_ar` || itemInsideArr == `${item}_en`,
    );
    return obj[`${result}`];
  }
};
export class DocsDto {
  @Expose()
  id: number;
  @Expose()
  type: string;

  @Expose()
  doc: string;

  @Expose()
  extra: string;

  // //   obj.name_en ? obj.name_en : obj.name_ar
  // @Transform(({ obj }) => obj.user)
  // @Expose()
  // user: User;
}
