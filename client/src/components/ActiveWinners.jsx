import React from 'react';
import './styles.css';

const ActiveWinners = () => {
    return (
        <div className="main-banner">
            <div className="banner">
                <div className="banner-text text-center">
                    <h2 className="mt-3 pt-2 mb-4 fw-bold h-font">Active Winners in 24hrs</h2>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-2 col-md-3 col-4">
                                <div className="card border-0 circle" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                    <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2AMBIgACEQEDEQH/xAAcAAADAAIDAQAAAAAAAAAAAAAAAQIDBwUGCAT/xAA7EAABBAECAwUGAwYGAwAAAAABAAIDEQQFIQYSMQciQVFhEzJxgZGhFGKxI1JygqLBFSQzQrLRNEPw/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAIBEBAQACAwEAAgMAAAAAAAAAAAECEQMSITEEYSIyQf/aAAwDAQACEQMRAD8A2mQlSukUipQArAQAgmkwFVIpETSaqkkE0jlV0kgml8+dm42n4r8rNnjggZ7z3mgsuXOzExZsmY1FDG6R58gBZ/RebuKeKdR4lzjNmySMgBuHHB7sQ+Hn6qVY2PrPa3hxTex0jBdPW3tshxY34gCz9aXwRdrWbG4DK0zGePySObfwO/6LXOJCTfMSWnrY3UZM7mj2MbQW+QCm3XWVvXR+0XQdRMUc0xw55AO7Ns3m8g7ou39QvKf7RtiSI0eoI2pbg7MOO59Uyo9E1Qc0nsz+HyPF3L/td614+iSpcdNmcqOVXSS6cppJXSKQY6RSukUgxkKaWWlNIMVKSFlIUkIIATTAQivpQqpFIEmEAKkQqRSqk6QRSKVUkgmkUqTpB1ftImfj8Eau6M0XQhhPo4gH7ErROgcO52uyOdjBvIHVzPNBb77RIRLwPrTSL5cV0g/lp39lrjs+kj03SnZGZI2OF7z3nHoFly5XGeNuHHtl6+zS+zBzw0ahqNt8WRtNLtODwLoWlMEkOI2SQf75BZSxONdCa8Mdm0T0HIf1XOS6lh/hhM+YeyXmuVv16de+Ot65o+BkNL34sVgbODQCtaaf7LQ+NMLJxwOT8TH3bquY0f1WxNX4q0EtfHHnBzvEMaXEfZa8kgGocV6U6AiSGfLjDS3ps8E/ZXh7TLSc3W4PQteQSpWasoXteFFJqqSpBNIVUikEFSQshClBjIUkLKVBQQEK6Qg+ikqVIQACdJhMIFSYTQgSVKkUgkhKqVpFBwPFzZZMBsLO9DLzsnjIsSRlpBatb6HpAytKgxg3nbE4uaHVuQdrtbZ1WJz8F7mtBdH3wPPz+1roWjZMeJquXjS00iXmb6h268nPvb2/j6uP7fAzSNTlc2GeRxZW8TcWgD58x2pczqGltbw1Jite6zIAHnqAeq5HK4hw2Nla2RtRinuJ6HyC4jL4t0F+iTPOVu1+zC0hxPhssv5Vv5HX5OFsyDu4MmSWub0bG3lefMm+i43J0iXT8zEiZbchswIIPuuII2XcNH4twpcUSczWxWR3jTgPMhcLq+W7I4ghGM3neHBwAF2aPRdS3bnKY6bQ0GZ+RouFJK4vk9kA556uI2v7L76WDTcYYmBj4w3MUbWk+vj919NL24/I+dl/a6TSKVUmqiKSIV0ikGMhIrIQpIQQVFLIVKCaQqSQfRSKTQgAFSQTCACaEIEhNCCUJlCBUtadogZpuv4uSxjWsnhFhooOc12/2IWzF0XtWwH5ml4ToR+1jldXrY6fZZ8k3j604rZl460NAbK5uZg5MUmO9xL2TNLu6d7FHrvva5GbhPTJomzOjxrb3uZuCf15q81wPCuqwsvDynGKSqIca+S53IhbdnWHNiJ9yh0peWXXj3+ZRwMOgxSZz5Midv4doqOJrGs38S6lzfZg/wDxLinVdQYzlhih9nFt0Bd3fnTSfmut8Q6ti4sDsbGkdI+Qcjnk+B6/9fNbH7MNOhwuE8eeNv7XNJmldfXeh9BS14pu7rD8jKTyO2poQvS8QQhCASTRSKkqSFZSKCCFBCyFQUCQhCDOhCEDCpSqQATSTQCSaECSTG5A81xGtcTaNojT/iWoQxPG4iB5nn+UboOWWveIdckzuNXaMOUYuJCHEAbvlNWfkDX1XD692vyO5o9C08MbX/kZRsn4MG3zJ+S107XtQk1t2qzZBdmufzOk5aDvQjyrZTLHtjYuGXXLbYHFPDUOSBkQ9yStnN2Wv86PUYJC2aabbx81tTQNaxOI8As2ZlNFvhuyPUeYXHavpTH2HVY23C8ctw8r2amU3GutNw3Zc9vc51e8XbravZDxDPlZGo6HkuDo8QCXFPiGXyub8ASD8yumaw7E4ewyxsjXZjxfJ+4PMrqOkazqGmZwzNMyZMfIFj2jD1B3IN9R6L08Ut9efk1rT1YmtN6F2wZsDWM13T2Zcdby4xEcgP8ACdj9Qtg6Jxxw9rQaMbUGRTHrDk/s3j67fRa6YuxoR4AjcHofAoUAhCCgR6KSq8EiipKgqyoKBIQhBmQpJStBkBTUAqgUFIStFoH4Lp3GPaDp3Dr3YkDDm6gOsTHU2P8Ajd/Yb/BZu0Tic8OaITjn/PZX7PH/ACfvO+Q+5C8/ue573Oc5znk24vNkk+N+K6kTbs2ucea/rIcyXNfjQH/04pMY+ZG5+q6xYN349fVI0DXgob4/FdhvN7eqxzNOx8QsnX6lVQN7XaI45hyWzmaJz2v8CxxafhYXYMTjLWsHT3YrQJZL7ks/fdGPLfr81xjW8pNkG9wQOiYYXEkAkDqfBcXCX67mVjj3nKyppJ53vkmldckjjZtfTEwM5APP7LJICSGsABN2qA7zvQUupNObU9GupZhXKLHgsfLsVQ90Ko5jQeKNY4fkadMzHsZe8LzzRn+U9PlS3HwLx/i8USnCnh/Cai1nNyF4LJR4lnjt4g9FoP1V4eTNgZkOXiSGPIgeHsePBwUs2r1YElxHCmuRcRaBianCKMrakZ+5IDTh9QVy10s1CRTtSSgRKgqipQCEkILRaklK0GQFMFYwVVoMgNoUApg2Rv12QaL7W9Sdm8ZT4oJMWDEyED8xaHuP9Q+i6Z3SK3vwXI8UZT8zibVcgnm9plyEeguh9gPouMsFaT4hPN0OhGxQzqfULG8nmF9Qd/gri6H0KosDdUEkIiX9ENPd2J3G480FTGdgEBvz2fKkM92/3iSkXbE+SoCgEU/EKHGgPiqvdYJX0D/Ggyc29IIB6mmqWdAfEhS8d/lJLj5eXxQbO7DtYczUc7R5Hnkmi/ERD8zSA77EfRbjJXnjsvyBi8f6U2/9X2sTq/NG6vuAvQt+CzqnaRStJQCSFJKB2hTaEFWlaRKm0GQJrGCqtBVoLqBPolal/uO+BQeZdQ7+fkPui6V5v+Yr5yD8Hfqs0+2RMOv7R3X4qSWnbf4rXSPmeb8Pihj+/wChCqUdSFgYfA+Cg+zmRaxNdarmVDPVEbWOje5zy1zfdaATzf8A391N7qRVuF9CiA7ivkspWIV0VOcgTj6rBRfKG+F2VTnX0RjjvuJKisned3YxX5ipeW47OVu73fdZ75W2enkFhYyyZHjvHp6eio5Lgx/4TijSMh18wzY7PxNf3XpjoSF5g01xZqmER4ZMf/IL0847rjJTStK0iVyGSotBKklBV2hQEILcVFqnFQOqCgVQKgKkFWg7j06KVQ62g805TeXMyW+Uzx/UVhe0Vuvt11jsfXdThr3MqQf1FcfLKGAWHH4Dotv8cIEckkjIo2l73uDWt8ST0C7HB2ccRyYBy3Y8bJrNYjnj2lDx8t/iuE0XLx2a3pz5i9rBlxFxIrYPBK9DTZ+I2ETPyovYEgB73hvXoASvPzZ3G+N+LCZfXm+aGfEnfj5UMkM0Zp0cjeVw+R/VSXLdHHWDpWZphn1B0ZaQWRzbB8TvCj4j0WlS1za5gebouuPPscmHU7QD33f9J8rqstNfBZImNuze/hS1YsBPeA80nyAGrJX2CGMH3dvVMhlEOHVDbjnOHkQs2JRa6/Ndx0vs+Oq6fBmx6s1sczA7l/D7jzHvedrjOJeHW8NzxQMyX5PtmF9uYGkHpSyx5MblpplhZNuIJBIBKbiAN+gWBrpi7uBrQOoIslUC1zupDvFq1ZrxZv8AP4z27NbMw/1BeoQ7maD5i15djH+YiHj7Rv6hen4/9Nn8I/RcZLGQFIlCRXKkVJTKkoAFCV7oQZHeKjxQhBQTCEIGhCEGgO0Boj431lrRQ9uD9WNJ+5K69yh8xa8W1gBAKELWOH0RtHMDW5PXyVPAcbcLI2F7oQu9Q3dMdNY4MY1rWkkkNFKjt0QhTSbLfzKHdEkIqCTyrFLsdkIXI2Pwnqs+m9nk2XE2OSSHIc1gkBIAJ9CF0vUc/K1PJ/EZ0zpZOY8t9Gg+AHghCx4pO1bcl8j4JR3XO6ObuCFjPe5Sdz+iSFvWUZMXfOxW+BnZ/wAgvT/QAeiELjJYalCFwpKShCCUIQg//9k=' className="card-img-top img-fluid" alt="Winner 1" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-4">
                                <div className="card border-0 shadow" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                    <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA4wMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwEEBQYABwj/xAA8EAABBAEDAgQEAwYFAwUAAAABAAIDEQQFEiExQQYTIlEyYXGBQpGxBxQVI6HRUmLB4fBTVPEXJDM0Q//EABsBAQADAQEBAQAAAAAAAAAAAAABAgMEBQYH/8QANBEAAgIBAwMCAwUHBQAAAAAAAAECEQMEITEFEkEiURMygRRhcdHwI0KRobHB4QY1Q1JT/9oADAMBAAIRAxEAPwD7MFJB5AeUAlAeQEoCQgPKASpJKWtZzNN03IypJWx+WwkOPv2UA/Nup5+TqM8k2TLJK95+J5FqQZ7neWG2Ad1A1zaElSeQbnFvIHIHY0hB4Fjy6ZwDW93UbBropAmLzDRe3gWCD3UAOKo91fi7jsgPrH7IvGMkUjNBzf5kD/8A67+hY6+QfkoJPsJu+eaUkEFACQoBBUgAhAA4IACgAKgAOQAFAAUAtAbqsQeQEhQCUB5ASgPBQCUB5CTgf2w57cfQYcMuAdPLu23Vtb/uQgPiL3Pkl2xtc8ur5UllkmzVx/DOsZ7ojHjEB5AsBU+JE1WGRqf+nOquJEhAYPVQYDR9rVXlRZYGIPgLNoMfE6N4dQc43fzUfHSJWBspS+DNUhLgYXGyfV0tSs0WVenkjDy9IzsHeJYJG8irCuppmbxyXgVj5EsErZWPMcrCCHCrv5KxQ/Tng7Om1PwrpebkvD5pcdpkcBVuHB+/CIg2FIIIQAkIASgAKABwUAWQgFuCAAoAHIAEINxWBKAkKAeQEoDygEhAeQEoD5D+2ySN2pafHvLiyBxc09rPUfPj+gQsjE/Z9o8GRmDIyo7v4AsMsvB14I+WfWoYY4mgMa1gArgLCjZsKQiviH2COqEeShkgb73fNYSOiPBm5D21V8qY0S0ZuVCyZjmvYHA+4V79jNpeT5V4qwW42pyNjZtjPPWqXZifpo8/MvUfc/2UyNk8D4IZVsL2ur33G1qjA66lIIQAkIACgBIQC3KAAUAtyAW5ALcUACA3VYglASoBKA8gJQHggJUAkID5R+2zHP71pWSNxDmvjNDobBH6lCyHeB8FpByOQ1o4C5Zvc7cfB2T3xsAMsjGD/MaVVFss5UE393nbUMzHO/ykFS4bEKbsrzsaPqueUdzojLYzMiOFrd8r2saO7iphBsmc6Mp+ThPl2wZDHm/qFo8ckZLLFnC+PsYB8Txf8yxx8v8AytsL2OfOt7Ps/gbBfp3hDSsWWPy5W4zTK279Z5P9SuhHIbikEIASgBKAByAW5QBZQC3IBTkADkAKA3FYgkICQoBKAlAeQEoCQoBKA5PxvpTNf8nAcx4dCPPY8fDfTlYZMklLtX4nXhxRcHKX4FDw1juw8N8UzQ17JDapJ+TWMa2K2sajjRvlYcCfUpWsL3Na2mgAWeTx9uqiDbdItJJRtnL6VNHmzNzcDSH4kPnGJr4JCCXDm6ocV+vPNpk7oq07LYlGT4o+gOiczTml8hc/oXO6hZWmkyytSaPmmp48mdqmUJWS5EWNEZtj3kh7b5po611rk8FbYk/Dozype1jcDIynYWJMdMZBjyk7Wxxj0V7igQPmFLi1HZ2Qmm91ReztIOt5WDG0lrIw5x+vppZxdKizgpvfg+n+HHTv0TFdku3PLTR/y36f6UunC5OCcuTj1CjHI1Dg0StTEEoCEADkABQC3qALcgFOQAFALcgAQG6rEEhASFAJQEoDyAlQAggPIDF8RZhwI2TtFuPoB9rPVcupl2U1yd+igsjcZcclGLHcxxZI/fJtBeRxZpZpbI17le2yPZELYxbG+o9uyq5dpeK7ipi6Uzz2zviJcDbR0F/RV+beizlSpMvZpZHhkfERdqzdIpG3I5d2A2SYOBpw6EccKnc0jWlZc/hx2U4kfIopMOKMjX/Ow4mT4b3Cdj2hjG/iBNG/1+yTbqycKXdTPpmmB403FEo2vELdw9uF6OP5FZ5GWviSr3LCuZkFACUABQAFQBb0ApyAW5AA5AKcgBQG6rEEoAlAPICUB5QCUAQQHkBV1GBs0XqF7TyCLsLLLHuibYZuMnRixu2ZZ54qut18rXMjse4Wp52PiY7pXAEtFpOcUi+PHKTM7Rnz5UT9Rzd7Wv8A/ijb1azsfqVTHFtXI0yuK9MTSycvDOMHbiBXNrWXYYwjNM5PM8vKEzcF8kcodua++n2VHjN1MjR/Ehc442c0NyGcH2cPce6zUnF7lpRUuGamn47tUz7jjJjaKee1E+/2WkIvI78GE8ixJ+524FAACh2XoHlkICEAJQAFAA5QBb0ApyAW5ALcgFu6oAEBvKxBKAm0BKgHkBKAkIAlAPIDyAy9eYW47Jm/gNH7rHMvTsdGnlUtzitamLrDrdQ3+XXxgdl523dueuvl2FeG9U1LVnPxszTp4pHN3xtJbG1zLoFpJ5PyXbHjY5JtL53Rbl8OZz7I0/Kkjcb8s5bABf3UuEpb0FkwpU5GLrem5OiYT8l2D/OJDIscZBL5CeK47DrfsFNbUx3Qk/Q7MTB03MhMj9V2B73b42BxcYvoVz5Z+KLwhW9n1LwPiPg0kyyg3M+xfWhwurTxcYHDqZKU9jo1uc5CAhACUADkABUAW9AKcgFuQC3IBTuqAG0BvKxBIQEhQDyAkICUB4IAgoBKA8gE5rBJiTMcLBaVWXDLQfqR881TdA7e/aHsBIdXYrz3Dudo9aOTt2ZraVmQajp0UsbRuZ0PsQtovt5Kpu7E5HiGPGJjflSRj23+3ZafERp8HE92kZ/77HlyHIe0u2eoOc6+VVzTJm0lUeDlP4o/P8STwE21o4H6lJxqNnJHI3kcT7JohB0jE29BGAujG7iceRVNl1XKEICCgBQAOQAOUAU9ALKAW5ALcgFOQC0IN9WBKAkIDygBIDyAkICQVAJQEoBOW9rMaQvcGgtI5KiXysmLSkrOM1fHM2M9oBDgPSelFeenTPVa7kcH4S146RqUmHqA2AuINigF1zipLuRy45uPpZ12frGkyje4MLLIBP4qWDi/B1QnS3MHWPFWDjQPbE0lxZYo9FbHjZnlzJGL4OwXvml1KdtGcny+eavqpzT/AHUV08P3mfQ8HxNLpMuLiZWM1+FIdolY6nxOPSweCCeO1KcORbRZy628SeblHTYGuYOa8xxy7Jf+nINrj9OxXVR5+HXYMrqL/iaKHWQeqAEoAHKAA5ALcgFOQC3IBbkApyAC0BugqxAQKAlASFAJQEoDwQEqAQ57Wiy4BvuhEpKKtmVna1HE4sx6lf29rWkYM8jVdXx4/Ti3Zkx5T82TGGQ8uc7c8jturjj7k/ZY6j0xVF+j5nqNQ5ZN9m/5r+zLE7PT0tcEj6uLOZ17wvhapckrCyUf/pHwUjklAmWKMzhtR8HZMTqj1BxiHRrh0W32n7jF6V+JBaR4UjEomzpXT0fgcOD9VD1DapER0yTtnZYeMGBjI27Q0UAOgCw5OngLWw1sDC4XcjQ36g3/AKLXFFuaPN6rmji0WST9jM/eDull9nAj36r1Gtz84c2mmnuauneIc/AkDPNMsXZrzYUOJ16bqmowbN2vZnWad4lwsoNbPePKR0f0P3VGmfQ6bq+DLtL0s2N4LQ5pBBFghQeommrQDncKCRRcgBJQAOKAU4oBTigFkoAEBuqxAQKAkFASoBNoCVAPICll6nDjGr3PPFeyso2cGp6hjw7J2zm9T1eSeTyxIQLqgtYxo+Z1nUcmWXbexUxR/wC82uBPsVazhhvk3Iw59jywH1Qyek/L/lhZZId0KO/pus+zZ1P6HQgtmha9nwkWF5skfomLJGa7ou0ytMB37rJnQmZGXFCRyFWjRMRDjMJJqgPkiIY2GMCQHoArRKS4sy9XyP3mZrIvgiBo/P3XpYMTiu5nwPXeqx1Mlhxu4p/xZRZAfJla4eokFdB865p1QwMJgFjlpQrYcbt2M3k21EXlN+5q6dq+TghhY/dE742O6fX5KJRs9HS9TzadpRdr2OnxNXgyfS4iKT/C48fmsmqPp9P1HDm2ezLhPFqp6BFqQASgFuQC3FALKAG0BuWrEEgoCQUAQKgEoBOTlQ4rd0z6voO5RJsxzajHhVzZgZutyTufFCPLY0cm+StYxPnNV1XJlbjDZGXHMWwTSvN1Y5VzyIT9Lk2U8IFz97+T1pSc2N3K2W8CQHIJJPKh8GuOfroqReiZwLhu3kcKy4Ofu7ZmhjZsmIC2tzbstPZYZMKme9oOrZdH6VvH2/IsnPxZRbn+WfZy4p6aa4PqdP1/SZF632v7/wAyrKYncte381j8GfseiupaT/0RJycWKHaJWuf/AIRyVpHTZH4OPP13Q4l89/hv+v4mZNkSSB42ljD3K7cWmUN2fJ9T6/m1l44Lth/Ni4YOD78H5hdDPn0H5QBLiAOeAgSFShrAK5BKUUdfui4WhrCO13SUO4hooAdrICmiLDa97SAOoO2vkqtGscr2NPB1PIxyAyS2d2nmlm4Hs6bqWXFVO0b2FqkOUNt7JPY91m4tH0ml6hi1FLhlolQd4BKAWSgFkoBdoQbtqwJtATaAkFAZ+o6oMe44iDIOruzf91ZRPJ13UY4bhB7/ANP8nNZWVLJm3I5xFd1okfMZ8+SeS5MXGdvmuf1/QKTFSqyuXXiTt5IcbCkw7n2yFwPcXtc3gD5q3gxTl3bFzGO3JDfxG3fZVZ0Y1WRIQI7eXWLJPdSjLsbdjAXOhcOjwfzQ0i5droTI5jgNwvi+Uoq8ie7QsNHWgT3B9lBKa5oE7210Db6UpoiUmuVsEz4w8810U0V7rY4E0d55PsoLK97EucQQRyG9FJnbAmA8oc82oIdeBTKsDspK7npTt8s9t9f0UMslsyJuQ7hCOGQH+XMwcgPZZ57hR5NVxaLTX7QDv9RPBHZVkrOrHkcaaZ1OBlDLxGSfiHDh81g1TPuNDqVqMKl58jnFQdYtxQC3HlQBaEG6Crg9aAIFAU9TynQQ0w0XdT7BTFHm9S1UsMKhyzl82Wm7iDZdZpbI+Syz27ivPOHyxzB3BG0ivuhjKduxcs5GOTx6qHRTRnLJaAB2ModFYy4QvFcdjz80RV7MtRnbkBx9qQvHlNguO2Q+x5UEPaQe6m0L59kL71sAelDjjk2pKK/BAvqLF9kG/IoEuI5tCvOzG0ABR9XXlC3akiNxDRu6nhQTdcnhTvkB0QjkGQfy/kUIa2Ksh2usHhGVW+wvMePKhf281qiXBrjVtr7mHKa2j3CkpzuJlNZcYHUMJUPlGiXoY+WUOc4A1sFAj/Ef9v1UF26WxoaLmnGnAdWx3B5VJxvc9TpWteDLT4Z07jfP5fRYn2otxQCyUAKEG1akHgVIDBQGDrk5cXhvO0UtYo+U6tnc5tLwYmRKDbXG2mtvaj7LQ8SUr2KUrtr3xu68GvooRR+Sch9zRt4oW7hTZWVktdbjuPCGfAvEdZc3sXHlEJLccHkv3t7FSQx73bzfYccdlBrNt0zzXEAgfD+iErZbA3tIIrnohDVPYCQmi4j09ypso75Ag9XLfUL5odEshRbew57HMpzmvAcfSS0gH791C3NZ45R3adC5A5h/mNc0/wCYEJZWUXF1JHi8baB490KP2IAH4j6eiEpLzwInA7coyq2Zn5zz/D3H/pva78iFnL5TowRvKl72Plkssr5fkrWZqPIgSj+I5Ln/AARRtv8AVR5Zso/s4/eyMOQyxRvfwZyZSPr0H6InZOZVJr22LccmzYOeOilmcJU7Op0nL8/F2k26Pg/TssJqmfa9J1XxsHa+Y7FxxVT1RZKEC9yA27UgkFARNKIoXvPYKUZZ5/DxORymbkHmjZF9/ktkj4XPkbMqaQPjvqLH3Vzj5K80zhO2+rORfcFR5Lrg9JITkg3xtITyZ8xGB4DXn2apspXAeONkTex9/qpQfzDRQAvmjygC3Uzjgd1BO9EwxyZMrYYmF738BrRyl0aYoTySUIK2y7m6Pm4eP58zNzAaJY/dtPzVe9PY7NR0zU4MfxJq1925ey8bFxJdJzMVl42QR5gf6gT8/wCv5Kivc782DDglgzYl6Zc2WfFDtTibktZ5LdO9Ipu0OINduvW0hR0dWlq4qdNLH9L3Lb8ePP8AD2DDwZxC2VnvQoH9VW6bOmeCOp0OKD+ak19Kv+pEkONmeJM+bJY2WPEgbbXCxfJ/ultKhLFhz6/LPIrUEYudk4GZpQyWRwY+ayWhFE3bubfcLRJpnjanJpc+k+JGKjO+F+Qybw5OIoTFkROnfGHeQ92132907zTJ0WajHtmu5q+18/QwJWmN7o5AWOaac09QVazxZY5QbUuTPkjD45oj0e0j81V8UawlUlJeCrgZHnNiDviDAHfIjg/ooizbPj7W6/XkpZ8535kTCRJkzshaPltFqsnykdOCCqEnxFN/zNONzRI7by1gDWrTycUk2t/Iwu5ZzyUe5RLk09FyvK1PYD6ZBtVJqz1+jZ/halLxLY6QuWB9mgC5SQDaEm2CrEEgoChrmR5OK1t/G8K0FbPI6zm+HhS92cfLMXOkZdCytz41221ZV87gsLq56KLIp0Vs2bY6JxPDvR+XIUPY1xR7k17BOk9DXg33KFEt6C80eVya3uA+yEdu5d38Bv5q5jQy6b268qBRf0zAGb5sssvk4sIuSQiyPoFVyo9DSaNai5TfbCPL/sW9OmwNO16F+NOZsZ3oL3Ctlj+6rK2tzr0uTTaXWxeOXdF7X+IWbg5w1SbS8bIIjkd5ojLqDgfn3UpqrJz6bP8AaJ6SEtnuCw/vXhXMx5DU2DLuaC4Chz/cqHs7LQi83T545PfG/wA/8k6pPpuexuXLqBbkOgaDG2MnkD+5UR2La2Wl1FZJ5PUklSJwtbxoJ9Ic1zi2GAxTFw+G6/snaycPUMWOeF/9U0/u4LOJmYuXJrcMWRHHJlkeU+V20OFV1/51UUzbFnw5nnhGSTnw3w1RWGm4n8ZwMLFmMzqDsktduaCOTX5K3c6OWOhw/asWLG7a3l5VkeJM7By8iVzWzDIgdsY5r/SWj5dkimkOqanT5purU4ulv+qOdkeS9znEmzdn3VjxG23bEP8AVZajLR2OexcjytfzMN3Dd3nM+jgCf62sl8x62TH3aWGVfg/p/giEOydfyXkgR49UT/jcP9AB+alL1WTP0aSK8y/ojSjlD5PKi+AHk9yrJnHKFLukOa7zJyR8LFZcmTXbH8RkD3NyWvB+E2oYjLsqS8HYQziaJr2nqOR7Fc75P0DT5lmxqa8hFyg2A3KSDdaSrEBAoSYPix7mx41H8RWmPk+a/wBQvbH9TmMw/wAyxx9FofNlOc9+6gvDkqaq8nSpJPxMLXA/O1WfB1aVL43b7jMaRz8IOd1oJ4KZIpZaJwyZJYQ/kNFj6oimVdsZNF+BxdIST7qyOdqkWGm3gHorGZs+Hc2THmlxw2OSKU+psjb6Aqkkez0nPKDeOtnydMcDCzMKYPxImFsZcHRiiDz3VLpnuz0uDLgncFt7GbBqEh0FupuihdmQtMbJXNsgKaOGOqktMs9LvSqziZ3ucC5xsnkk+6ufOW5T7nyzS8LYMWqaiMXJc8RBhfTDXIVZM9Hp+lx6jOoT4F6rA3C1KXHiLixh4LjypRzazDHDmlCPCEDorHGWMSebEMc2NK6OT1eppRpNGmPNkwPvxumWdT1CTOhhfPFD5odzK1lOdx3VY7HZqtVLPijOaXd71uZUhNu+qk4aBaSgOTnN+NnA/wDbD/VY/wDIe5D/AG76hROLdYzWjo1pk+poBPLIkv2EH9DT03jAbJ+J4sn6q8Vsceo3y0XIfTAa7lWRzz3Y/GF7ipM38yRtaLI4+awmwKIWWRH1HQ8kn34/CpmlZpZn0AFlQD//2Q==' className="card-img-top img-fluid" alt="Winner 2" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-4">
                                <div className="card border-0 shadow" style={{ width: '4rem', height: '4rem', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                    <img src='data:image/jpeg;base64,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' className="card-img-top img-fluid" alt="Winner 3" />
                                </div>
                            </div>
                         
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveWinners;