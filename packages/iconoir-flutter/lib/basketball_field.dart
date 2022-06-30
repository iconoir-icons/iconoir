import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BasketballField extends StatelessWidget {
  const BasketballField({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BasketballField.svg');
}
