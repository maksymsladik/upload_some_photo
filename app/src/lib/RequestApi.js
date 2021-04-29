import Request from "./Request";

class RequestApi {
  static get() {
    return new Request().setMethod("GET").setOptions().send();
  }

  static post(body) {
    return new Request()
      .setMethod("POST")
      .setHeaders()
      .setBody(body)
      .setOptions()
      .send();
  }

  static delete(id) {
    return new Request().setUrl(id).setMethod("DELETE").setOptions().send();
  }
}

export default RequestApi;
