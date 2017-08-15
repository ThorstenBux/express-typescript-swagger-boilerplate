import { Container, inject, interfaces, injectable } from "inversify";
import { autoProvide, makeProvideDecorator, makeFluentProvideDecorator } from "inversify-binding-decorators";

const iocContainer = new Container();

const provide = makeProvideDecorator(iocContainer);
const fluentProvider = makeFluentProvideDecorator(iocContainer);

const provideSingleton = function(
    identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>
  ) {
      return fluentProvider(identifier)
        .inSingletonScope()
        .done();
  };

export { iocContainer, autoProvide, provide, inject, provideSingleton, injectable };
