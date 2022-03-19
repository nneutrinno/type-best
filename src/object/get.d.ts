declare namespace Get {
    // @ts-expect-error
    type Lib<T, Property> = T[Property];
    interface Custom<Property> extends Generic { compute: Lib<this['item'], Property> }
}
import Get = Get.Lib;