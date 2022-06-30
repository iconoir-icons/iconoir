import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShoppingCode extends StatelessWidget {
  const ShoppingCode({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ShoppingCode.svg');
}
