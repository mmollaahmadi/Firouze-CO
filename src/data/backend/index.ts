class Backend {
  backend_url: string;
  static backendClient: any = undefined;

  constructor(backend_url: any = process.env.NEXT_PUBLIC_BACKEND_URL) {
    // singleton
    if (Backend.backendClient) {
      throw new Error(
        "An instance from this class has been created before(singleton pattern)"
      );
    } else {
      Backend.backendClient = this;
    }
    this.backend_url = backend_url;
  }
  public async giveMeAllCountries() {
    try {
      var myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      let response = await fetch(this.backend_url + "/v2/all/", {
        method: "GET",
        headers: myHeaders,
      });
      if (response.ok) {
        return { ok: response.ok, error: "", result: await response.json() };
      } else {
        return { ok: response.ok, error: await response.text(), result: "" };
      }
    } catch (error) {
      console.error("e:", error);
      return { ok: false, error: "", result: "" };
    }
  }
}

export default new Backend();
