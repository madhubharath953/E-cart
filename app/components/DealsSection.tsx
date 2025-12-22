import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Flame, Clock, ArrowRight } from "lucide-react";

export const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <section className="py-16 lg:py-20 lg:pt-1  bg-white">
      <div className="container-custom">
        {/* Flash Sale Banner */}
        <div className="relative  m-22 overflow-hidden rounded-3xl justify-center items-center bg-gradient-to-r from-orange-500 to-orange-600 mb-12">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-6">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-6 ">
                <Flame className="h-4 w-4" />
                Flash Sale Ends Soon!
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Up to 50% OFF
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-md">
                Don&apos;t miss out on our biggest sale of the season. Limited time offers on top brands!
              </p>

              <Button variant="hero-outline" size="xl" className="group border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Shop Flash Sale
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center lg:justify-end">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                      {formatTime(timeLeft.hours)}
                    </span>
                  </div>
                  <span className="text-sm text-primary-foreground/70 mt-2">Hours</span>
                </div>
                <span className="text-3xl font-bold text-primary-foreground/50">:</span>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                      {formatTime(timeLeft.minutes)}
                    </span>
                  </div>
                  <span className="text-sm text-primary-foreground/70 mt-2">Minutes</span>
                </div>
                <span className="text-3xl font-bold text-primary-foreground/50">:</span>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse-soft">
                    <span className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                      {formatTime(timeLeft.seconds)}
                    </span>
                  </div>
                  <span className="text-sm text-primary-foreground/70 mt-2">Seconds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>

        {/* Deal Cards */}
        <div className="p-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Deal Card 1 */}
          <div className="group relative bg-card rounded-2xl p-6 border border-border/50 overflow-hidden card-hover hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-semibold rounded-full mb-4">
                Electronics
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Essentials</h3>
              <p className="text-gray-900 mb-4">Up to 40% off on gadgets & accessories</p>

              <div className="flex items-center gap-2 text-sm text-gray-900">
                <Clock className="h-4 w-4" />
                Limited time offer
              </div>
            </div>
          </div>

          {/* Deal Card 2 */}
          <div className="group relative bg-card rounded-2xl p-6 border border-border/50 overflow-hidden card-hover hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <span className="inline-block px-3 py-1 bg-pink-500/10 text-pink-500 text-sm font-semibold rounded-full mb-4">
                Fashion
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Style Season</h3>
              <p className="text-gray-900 mb-4">Trendy looks at unbeatable prices</p>

              <div className="flex items-center gap-2 text-sm text-gray-900">
                <Clock className="h-4 w-4" />
                Ends in 2 days
              </div>
            </div>
          </div>

          {/* Deal Card 3 */}
          <div className="group relative bg-card rounded-2xl p-6 border border-border/50 overflow-hidden card-hover md:col-span-2 lg:col-span-1 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 hover:bg-emerald-500" />

            <div className="relative  ">
              <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 text-sm font-semibold rounded-full mb-4">
                Home
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home Makeover</h3>
              <p className="text-gray-900 mb-4">Transform your space for less</p>

              <div className="flex items-center gap-2 text-sm text-gray-900">
                <Clock className="h-4 w-4" />
                New deals daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};