import React from 'react'

export const Death_certificate = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Death Certificate Application</title>
            <link rel="stylesheet" href="death-certificate.css" />
            {/* Bootstrap */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <section className="application-section">
                <div className="container">
                    <div className="heading">
                        <h1>Death Certificate Application</h1>
                        <p>
                            Complete the form below to apply for a Death Certificate online
                            through the Digital Gram Panchayat Portal.
                        </p>
                    </div>
                    <div className="card shadow-lg border-0 p-5">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Deceased Person's Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select">
                                        <option selected="">Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Date of Death</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Time of Death</label>
                                    <input type="time" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Place of Death</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Hospital / Home / Village"
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Father's / Husband's Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Age at Death</label>
                                    <input type="number" className="form-control" placeholder="Age" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cause of Death</label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="Enter cause of death"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Applicant Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Applicant's name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Relationship with Deceased</label>
                                    <select className="form-select">
                                        <option>Select Relationship</option>
                                        <option>Father</option>
                                        <option>Mother</option>
                                        <option>Son</option>
                                        <option>Daughter</option>
                                        <option>Spouse</option>
                                        <option>Brother</option>
                                        <option>Sister</option>
                                        <option>Other</option>
                                    </select>
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
                            <div className="mb-3">
                                <label className="form-label">Village Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter village name"
                                />
                            </div>
                            <hr />
                            <h4 className="text-success mb-3">Upload Required Documents</h4>
                            <div className="mb-3">
                                <label className="form-label">
                                    Medical Death Certificate / Hospital Record
                                </label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Applicant Aadhaar Card</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Identity Proof of Deceased (Optional)
                                </label>
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
