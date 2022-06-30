import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Shop extends StatelessWidget {
  const Shop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Shop.svg');
}
