import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShoppingBag extends StatelessWidget {
  const ShoppingBag({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ShoppingBag.svg');
}
