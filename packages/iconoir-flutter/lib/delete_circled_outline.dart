import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DeleteCircledOutline extends StatelessWidget {
  const DeleteCircledOutline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DeleteCircledOutline.svg');
}
