import React from 'react'
import "./birth_certificate.css"

export const Birth_certificate = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Birth Certificate Application</title>
            <link rel="stylesheet" href="birth-certificate.css" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <section className="application-section">
                <div className="container">
                    <div className="heading">
                        <h1>Birth Certificate Application</h1>
                        <p>Fill out the form below to apply for a Birth Certificate online.</p>
                    </div>
                    <div className="card shadow-lg border-0 p-5">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Child's Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter child's name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select">
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Time of Birth</label>
                                    <input type="time" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Place of Birth</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Hospital / Home / Village"
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Father's Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter father's name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Mother's Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter mother's name"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Mobile Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Residential Address</label>
                                <textarea
                                    rows={3}
                                    className="form-control"
                                    placeholder="Enter complete address"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Aadhaar Number of Parent</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="XXXX XXXX XXXX"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Village Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter village"
                                    />
                                </div>
                            </div>
                            <hr />
                            <h4 className="text-success mb-3">Upload Required Documents</h4>
                            <div className="mb-3">
                                <label className="form-label">Hospital Birth Record</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Parent Aadhaar Card</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Address Proof</label>
                                <input type="file" className="form-control" />
                            </div>
                            <button className="btn btn-success btn-lg px-5">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}
