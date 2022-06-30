import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pin extends StatelessWidget {
  const Pin({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Pin.svg');
}
