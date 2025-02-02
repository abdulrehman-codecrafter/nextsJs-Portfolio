
export default function Footer() {
    return (
        <footer className=" py-10 mt-20">
            
                {/* Copyright Notice */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Abdul Rahman. All rights reserved.
                    </p>
                </div>
            {/* </div> */}
        </footer>
    );
}