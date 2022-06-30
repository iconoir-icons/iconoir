import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SimpleCart extends StatelessWidget {
  const SimpleCart({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SimpleCart.svg');
}
